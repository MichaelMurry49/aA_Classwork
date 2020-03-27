require 'rails_helper'
require 'securerandom'

RSpec.describe User, type: :model do
  
  subject(:user) do 
    FactoryBot.build(
      :user, 
      username: "user",
      password: "password"
    )
  end


  it {should validate_presence_of(:username)}
  it {should validate_uniqueness_of(:username)}
  it {should validate_presence_of(:session_token)}
  it {should validate_presence_of(:password_digest)}

  describe "User::find_by_credentials" do
    it "returns the user if username and password are correct" do
      user1 = User.new(username: "1", password: "111111")
      user1.save!
      
      new_user = User.find_by_credentials("1", "111111") 
      expect(new_user).to eq(user1)
    end
  end

  describe "User#ensure_session_token" do
    it "ensures session token after initialization" do
      expect(user.session_token).not_to be_nil
    end
  end

  # describe "User::generate_session_token" do
  #   it "generates safe random token" do
  #     expect(SecureRandom).to receive(:urlsafe_base64)
  #   end
  # end

  describe "User#password=" do
    it "sets password" do
      user.password="hello!"
      expect(user.password).to eq("hello!")
    end

    it "sets up encrypted password digest" do
      user.password="hello!"
      expect(user.password_digest).not_to be_nil
    end
  end

  describe "User#is_password?" do
    it "returns true if the password is correct" do
      expect(user.is_password?("password")).to eq(true)
    end
    
    it "returns false if the password is not correct" do
      expect(user.is_password?("wrongpassword")).to eq(false)
    end
  end

  describe "User#reset_session_token!" do
    it "checks if it changes the token" do
      first = user.session_token
      user.reset_session_token!
      last = user.session_token
      expect(first).not_to eq(last)
    end
    # it "will successfully save the user to the database" do
    #   expect(user.reset_session_token!).not_to be_nil
    # end
  end
end
