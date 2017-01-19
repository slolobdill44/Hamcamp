class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: "Album"

  validates :password_digest, presence: true
  # If a password was set, we validate it meets the requirements.
  # Note the `allow_nil`.
  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true


  #default should be specific unsplash of right dimensions
  has_attached_file :header_image, default_url: 'https://images.unsplash.com/photo-1416273567255-8abe875affcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1075&h=175&fit=crop&s=5ac1ddc0957392dd2e020618b9feabf9'
  validates_attachment_content_type :header_image, content_type: /\Aimage\/.*\Z/

  has_attached_file :profile_image, styles: {thumb: "50x50#", full: "200x200#"}, default_url: 'http://res.cloudinary.com/adrianlobdill/image/upload/c_scale,w_50/v1484852877/noun_497207_cc_khq2sm.png'
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
