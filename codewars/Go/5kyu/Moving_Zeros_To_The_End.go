package kata

func MoveZeros(arr []int) []int {
	var notZeros []int
	length := len(arr)

	for i := 0; i < length; i++ {
		if arr[i] != 0 {
			notZeros = append(notZeros, arr[i])
		}
	}
	diff := length - len(notZeros)
	output := append(notZeros, make([]int, diff)...)
	return output
}
