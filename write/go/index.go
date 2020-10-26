package main

import (
    // "encoding/json"
    "fmt"
	"net/http"
	// "os"
	// "strconv"
)

func main() {
	fmt.Println("i am running")
	
    http.HandleFunc("/go/write", ServerSendSha256)
	http.ListenAndServe(":3000", nil)
}

func ServerSendSha256(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "this is love")
}
