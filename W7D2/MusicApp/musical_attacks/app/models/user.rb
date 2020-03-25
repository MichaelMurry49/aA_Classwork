class User < ApplicationRecord
    attr_reader :password

    after_initialize :ensure_session_token

    RAND_GEN_VALUES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-_=+[]{}}|;:<>,./?'
    def self.generate_session_token
        s_token = ""
        64.times do
            s_token += RAND_GEN_VALUES[rand(RAND_GEN_VALUES.length)]
        end
        s_token

    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: param[:email])
        if user
            user.is_password?(password) ? user : nil
        else
            nil
        end
    end

    ##################

    def reset_session_token!
        @session_token = User.generate_session_token
    end

    def ensure_session_token
        @session_token ||= User.generate_session_token
    end

    def password=(pass)
        @password = pass
        self.password_digest = BCrypt::Password.create(pass)
    end

    def is_password?(pass)
        BCrypt::Password.new(self.password_digest).is_password?(pass)
    end
end
