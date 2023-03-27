import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigate ,Routes,Route} from "react-router-dom";
import { Success } from './Success';

const Login = () => {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      country:'USA',
      terms:''
    },
    validationSchema: Yup.object({
      name:Yup.string()
      .max(20,'Name mmust be 20 charrachters of less')
      .required('Name Required'),
      email:Yup.string()
      .required('Invalid email addres'),
      terms:Yup.array().required('Terms of the service must be checked')
    }),


    onSubmit:(value)=>{
      console.log(value)
      alert('Welcome Home Page')
    }
  })
    
  return(
    <>
      <div className='log-page'>
        <form onSubmit={formik.handleSubmit}>
          <div className='inp-style'>
          <span style={formik.touched.name && formik.errors.name? {color:'red'} : null}>{formik.touched.name && formik.errors.name ? formik.errors.name : 'Name'}</span>
            <input type='text' onBlur={formik.handleBlur} name='name' value={formik.values.name} onChange={formik.handleChange} placeholder='Enter Your Name' />
          </div>
          <div className='inp-style'>
          <span style={formik.touched.email && formik.errors.email? {color:'red'} : null}>{formik.touched.email && formik.errors.email? formik.errors.email : 'Email'}</span>
            <input type='email'  name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Your Email'/>
          </div>
          <div className='inp-style'>
          <span>Email</span>
            <select className='select-style' value={formik.values.country} onChange={formik.handleChange} name={formik.country}>
              <option>Armenia</option>
              <option>Russia</option>
              <option>Ukraina</option>
            </select>
          </div>
          
          <div className='inp-checkbox'>
          <span style={formik.touched.terms && formik.errors.terms? {color:'red'} : null}>{formik.touched.terms && formik.errors.terms ? formik.errors.terms : 'not checked'}</span>
            <input type='checkbox' name='terms' value="checked" onChange={formik.handleChange}/>
          </div>
          <div className='btn-style'>
            <button type='submit'>ok</button>
          </div>
        </form>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="container">
        <Login/>
    </div>
  );
}

export default App;
