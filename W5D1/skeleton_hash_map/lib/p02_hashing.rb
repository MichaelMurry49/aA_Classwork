class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    hash_value = 0
    self.each_with_index do |el, i|
      hash_value += (el + i).hash
    end
    hash_value
  end

end

class String
  def hash
    alpha = ("a".."z").to_a
    hash_value = 0
    self.each_char.with_index do |char, i|
      alpha_idx = (alpha.index(char.downcase))
      hash_value += (alpha_idx + i).hash
    end
    hash_value
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
