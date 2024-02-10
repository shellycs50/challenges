package kata

func Cakes(recipe, available map[string]int) int {

	highest_amount := int(^uint(0) >> 1)
	var num_possible int

	for key, value := range recipe {
		if value == 0 {
			goto Continue
		}
		if available[key] == 0 {
			return 0
		}
		num_possible = available[key] / value
		if num_possible < highest_amount {
			highest_amount = num_possible
		}
	Continue:
	}
	return highest_amount
}
