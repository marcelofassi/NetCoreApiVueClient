import Axios from 'axios'
import exampleService from '../services/ExampleService'
import studentService from '../services/StudentService'
import HojaDeTeimposService from '../services/HojaDeTiemposService'

let apiUrl = 'https://localhost:44370/'
 
// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
    exampleService: new exampleService(Axios),
    studentService: new studentService(Axios, apiUrl),
    HojaDeTeimposService: new HojaDeTeimposService(Axios, apiUrl)
}