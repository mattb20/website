module BooleanHelper
  def parse_boolean(possible_boolean, true_case, false_case)
    return true_case if possible_boolean.class == TrueClass
    return false_case if possible_boolean.class == FalseClass
    possible_boolean
  end
end