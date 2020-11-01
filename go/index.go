package main

import (
	"encoding/json"
	"crypto/sha256"
    "fmt"
	"net/http"
	"bufio"
	// "reflect"
	// "encoding/hex"
	"os"
	"log"
	"io/ioutil"
	"strconv"
)

func main() {
	fmt.Println("i am running")
	
	http.HandleFunc("/go/sha-256", ServerSendSha256)
	http.HandleFunc("/go/write", ServerWrite)
	log.Fatal(http.ListenAndServe(":3001", nil))
}

func ServerSendSha256(w http.ResponseWriter, r *http.Request) {
	
	bodyBytes, _ := ioutil.ReadAll(r.Body)
	var data hash_input
	_ = json.Unmarshal(bodyBytes, &data)
	first_num, err1 := strconv.Atoi(data.First_number)
	second_num, err2 := strconv.Atoi(data.Second_number)
	if err1 != nil || err2 != nil {
		if err1 != nil{
			http.Error(w, err1.Error(), 400)
			return
		}
		http.Error(w, err2.Error(), 400)
		return
	}
	var sum = first_num + second_num
	var sum_hash = sha256.Sum256([]byte(strconv.Itoa(sum)))	
	s := fmt.Sprintf("%x", sum_hash)
	resp := MyRespond{s}
	js_resp, err := json.Marshal(resp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(js_resp)
	
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

  type hash_input struct{
	  First_number	string
	  Second_number	string
  }