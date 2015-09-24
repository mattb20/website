module GraduatesHelper
  def find_graduates(category = nil)
    if category
      find_graduates_by(category)
    else
      graduates
    end
  end

  def next_graduate(current_graduate)
    index = graduates.find_index { |graduate| graduate == current_graduate }
    graduates[index.next % graduates.count]
  end

  private

  def find_graduates_by(category)
    graduates.select do |graduate|
      graduate["categories"] && graduate["categories"].include?(category)
    end
  end

  def graduates
    data.graduates
  end

end
