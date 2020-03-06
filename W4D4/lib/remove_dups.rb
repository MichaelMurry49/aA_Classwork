
  def remove_dups(array)
    my_hash = Hash.new(false)
    new_array = []
    array.each do |ele|
      my_hash[ele] = true
    end
    my_hash.keys
  end

  def two_sum(array)
    answer = []
    (0...array.length-1).each do |i|
      (i+1...array.length).each do |j|
        if array[i] + array[j] == 0
          answer << [i,j]
        end
      end
    end
    answer
  end

  def my_transpose(array)
    answer = Array.new(array.length) {Array.new(array.length)}
    (0...array.length).each do |i|
      (0...array.length).each do |j|
        element = array[i][j]
        answer[j][i] = element
      end
    end
    answer
  end

  def stock_picker(array)
    value_pair = []
    largest = array[1] - array[0] - 1 
    (0...array.length - 1).each do |i|
      (i+1...array.length).each do |j|
        if array[j] - array[i] > largest 
          value_pair = [i, j]
        end
      end
    end
    value_pair
  end

  


