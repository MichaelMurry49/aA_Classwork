require "byebug"

class TowersOfHanoi
  attr_reader :size
  attr_accessor :tower_one, :tower_two, :tower_three
  def initialize(num)
    @tower_one = []
    @tower_two = []
    @tower_three = []
    (1..num).reverse_each do |i|
      @tower_one << i
    end
    @size = num
  end

  def move 
    length = (1..size).to_a
    print_towers
    message = "What tower (type 1, 2 or 3) would you like to grab a disc from?"
    begin
      input_1 = get_input(message, length)
      disc = select_tower(input_1).last 
      if disc.nil?
        raise "No disc at that stack"
      end
    rescue
      puts "Not a valid disc, pick another tower"
      retry
    end
    begin
      message_2 = "What tower would you like to place the disc"
      input_2 = get_input(message_2, length)
      debugger 
      raise "Can't place disk there" unless select_tower(input_2).empty? || disc < select_tower(input_2).last 
    rescue
      puts "You can not place the disc there"
      retry
    else
      take_and_place_disc(input_1, input_2)
    end
    true
  end

  def take_and_place_disc(index1, index2)
    select_tower(index2) << select_tower(index1).pop
  end

  def select_tower(index)
    if index == 1
      tower_one
    elsif index == 2
      tower_two
    else 
      tower_three
    end
  end

  def won?
    tower_three.length == size
  end


  def print_towers 
    print "Tower_one: "
    p tower_one
    puts 
    print "Tower_two: "
    p tower_two
    puts 
    print "Tower_three: "
    p tower_three 
    puts 
  end

  private

  def get_input(message, values)
    begin
      puts message
      #debugger 
      input = gets.chomp.to_i
      raise "Invalid Input" unless values.include?(input)
    rescue => exception
      puts "invalid input" 
      retry
    end
    input 
  end
end