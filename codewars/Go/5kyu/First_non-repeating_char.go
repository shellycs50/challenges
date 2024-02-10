package kata

import (
	"strings"
)

func FirstNonRepeating(str string) string {
	counts := make(map[string]int)

	for i := 0; i < len(str); i++ {
		current := strings.ToLower(string(str[i]))
		if counts[current] != 0 {
			counts[current]++
		} else {
			counts[current] = 1
		}
	}

	for i := 0; i < len(str); i++ {
		if counts[strings.ToLower(string(str[i]))] == 1 {
			return string(str[i])
		}
	}
	return ""
}
