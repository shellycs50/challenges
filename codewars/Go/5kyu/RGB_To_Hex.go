package kata

import "fmt"

func RGB(r, g, b int) string {
	output := ""

	for _, value := range [...]int{r, g, b} {
		if value > 255 {
			value = 255
		}
		if value < 0 {
			value = 0
		}

		dividend := value / 16
		remainder := value % 16

		for _, val := range [...]int{dividend, remainder} {
			if val > 9 {
				output += string(rune(val + 55))
			} else {
				output += fmt.Sprint(val)
			}
		}
	}
	return output
}
