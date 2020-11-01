package main

import (
	"encoding/json"
	// "crypto/sha256"
    "fmt"
	"net/http"
	"bufio"
	"reflect"
	// "encoding/hex"
	"os"
	"log"
	// "io/ioutil"
	"strconv"
)

func main() {
	fmt.Println("i am running")
	
	http.HandleFunc("/go/sha-256", ServerSendSha256)
	http.HandleFunc("/go/write", ServerWrite)
	log.Fatal(http.ListenAndServe(":3001", nil))
}

func ServerSendSha256(w http.ResponseWriter, r *http.Request) {
	
	fmt.Println(r)
	// var first_num = 0 
	// var second_num = 0
	// first_num, _ = strconv.Atoi(r.URL.Query()["first_number"][0])
	// second_num, _ = strconv.Atoi(r.URL.Query()["second_number"][0])
	// var sum = first_num + second_num
	// var sum_hash = sha256.Sum256([]byte(strconv.Itoa(sum)))	
	// s := fmt.Sprintf("%x", sum_hash)
	// fmt.Println(s)
	// resp := MyRespond{s}
	// fmt.Println(resp)
	// js_resp, err := json.Marshal(resp)
	// fmt.Println(js_resp)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// 	return
	// }
	// w.Header().Set("Content-Type", "application/json")
	// w.Write(js_resp)
	
}

func ServerWrite(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	var line_number = 0 
	line_number, _ = strconv.Atoi(r.URL.Query()["linenumber"][0])
	file, _ := os.Open("h1.txt")
	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)
	var txtlines []string
 
	for scanner.Scan() {
		txtlines = append(txtlines, scanner.Text())
	}
	file.Close()
	a := txtlines[line_number]
	resp := MyRespond{Result:a}
	js_resp, err := json.Marshal(resp)
	if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	w.Write(js_resp)
	
}

type MyRespond struct {
	Result    string
  }