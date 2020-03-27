class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    
    attr_reader :password

    def self.find_by_credentials(uname, pass)
        # debugger
        @user = User.find_by(username: uname)
        return nil if @user.nil?
        @user.is_password?(pass) ? @user : nil
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end


    def password=(pass)
        @password = pass
        self.password_digest = BCrypt::Password.create(pass)
    end  

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token   
    end

    def ensure_session_token
        self.session_token ||= reset_session_token!
    end


    
end
