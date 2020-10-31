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
	
    http.HandleFunc("/go/sha-256", ServerSendSha256)
	http.ListenAndServe(":3001", nil)
}

func ServerSendSha256(w http.ResponseWriter, r *http.Request) {
	// w.Header().Set("Content-Type", "text/html; charset=utf-8")
	// w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Println("executed")
	fmt.Fprintf(w, "abtin goozo")
}

