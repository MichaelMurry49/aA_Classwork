class User < ApplicationRecord


    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, uniqueness: true

    after_initialize :ensure_session_token

    attr_reader :password


    def self.find_by_credentials(username, pw)
        user = User.find_by(username: username)

        return nil if user.nil?

        user.is_password?(pw) ? user : nil

    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end


end
