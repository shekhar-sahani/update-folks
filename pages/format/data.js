import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { postRequest } from '../../components/constants/ApiCall'
import styles from './format.module.css'
import Modal from './Modal'
export default function data() {
    const [formData,  setFormData] = useState([])
    const [json, setJson] = useState({})
    const [show, setShow] = useState(false)
    const [disable, setDisable] = useState(false)
    const [imageLinks, setImageLinks] = useState()
    const [image, setImage] = useState([])
    const [showImageLinks, setShowImageLinks] = useState(false)

    const handleFormData = (e) => {
        let name = e.target.name
        let value = e.target.value
        setJson({...json, [name] : value})
    }
      

    const postSrcData = async () => {
      const res = await postRequest('/src/data', JSON.stringify(imageLinks), "POST")
      const resData = await res.json()
      console.log('res', resData) 
      if(resData['image_links']) {
        setImage(resData['image_links'])
        setShowImageLinks(true)
      }
    }

    const addData = (e) => {
        e.preventDefault()
        if (!json.title || !json.desc || !json.image) {
            alert('invalid form data')
            return;
        }
        setFormData([...formData, json])
        setJson({
          title: '',
          image: '',
          fall: '',
          desc: ''
        })
    }
    console.log('form', formData)
    console.log('json', json)
    console.log('src_Data', imageLinks)
    const handleCopyImage = (item, id) => {
      navigator.clipboard.writeText(item)
      toast(`Copied To Clipbard ${id} `, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  return (
    <>
    <ToastContainer />
    <div>
      <Modal setClose={setShow} modal_show={show} formData={formData} />
      {/* Image Handle Section */}
      <div style={{position:'absolute', right:30}} > 
        {!showImageLinks ? <form >
          <div style={{textAlign:'right'}} >
          <button style={{padding:'5px 8px', backgroundColor:'gray'}} className={styles.formbold_btn} onClick={() => setShowImageLinks(true)} > Next</button>
          </div>
          <label className={styles.formbold_form_label} >Paste html anchor data to get image links</label> 
          <textarea  rows="20" type="text"
          className={styles.formbold_form_input}
           onChange={(e) => setImageLinks(e.target.value)}  />
          <button type='button' style={{backgroundColor:'black', marginTop:"10px"}} className={styles.formbold_btn_add} onClick={() => postSrcData()} >Post Src Data</button>
        </form> :
        <div>
          <div style={{textAlign:'right'}} >
          <button style={{padding:'5px 8px', backgroundColor:'gray'}} className={styles.formbold_btn} onClick={() => setShowImageLinks(false)} > Prev</button>
          </div>
        {image.map((item, id) => (
          <div style={{display:'flex', justifyContent:'space-between', maxHeight:"500px", overflow:"auto"}} key={id}>
            <p > {id}  {item}  </p>
          <small style={{cursor:'pointer'}} onClick={() => handleCopyImage(item, id)} > <svg style={{height:'30px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
         </small>
          </div>
        ))}
      </div> }
      </div>
      {/* Image Handle Section End */}
    <div className={styles.formbold_main_wrapper}>
  <div className={styles.formbold_form_wrapper}>
    <form onSubmit={addData} style={{marginTop:'30px'}} >
      <div   className={styles.formbold_mb_5}>
      <div style={{marginTop:"10px", textAlign:"right"}} >
        {formData.length > 0 ? `Total Post Count: ${formData.length}` : ''}
    </div>
        <label for="title" className={styles.formbold_form_label}> Title </label>
        <input
          type="text"
          name="title"
          value={json.title}
          onChange={handleFormData}
          placeholder="Enter Post Title"
          className={styles.formbold_form_input}
        />
      </div>

      <div className={styles.formbold_mb_5}>
        <label  className={styles.formbold_form_label}> Image Url </label>
        <input
          type="text"
          name='image'
          value={json.image}
          placeholder="Enter Image url"
          onChange={handleFormData}
          className={styles.formbold_form_input}
        />
      </div>
      <div className={styles.formbold_mb_5}>
        <label for="message" className={styles.formbold_form_label}> Message </label>
        <textarea
          rows="6"
          name="desc"
          value={json.desc}
          onChange={handleFormData}
          placeholder="Type post description"
          className={styles.formbold_form_input}
        ></textarea>
      </div>

      <div style={{position:'relative'}} className={styles.formbold_mb_5}>
        <label for="subject" className={styles.formbold_form_label}> Fall <small onClick={() => setDisable(!disable)}  style={{position:'absolute', right:0}} > <b> {disable ? 'Enable' : 'Disable'} Fall </b> </small> </label>
        <input
          type="text"
          name="fall"
          disabled={disable}
          value={json.fall}
          onChange={handleFormData}
          placeholder="Enter fall date"
          className={styles.formbold_form_input}
        />
      </div>
      <div>
        <button type='submit'  className={styles.formbold_btn} > Add Data </button>
        <button type='button' className={styles.formbold_btn_add} onClick={() => setShow(!show)} >Show Form Data</button>
        
      </div>
    </form>
    
  </div>
</div>


    </div>
    </>
  )
}
