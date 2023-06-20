

const express = module.require('express')
const router = express.Router()

const My_subjects = module.require('../schema/model')

// get all
router.get('/getall',async(req,res)=>{
    try {
        const all_students =await My_subjects.find() 
        res.json({
            subjects:all_students
        })
        
    } catch (error) {
        res.send(error)
    }
})

// posting
router.post('/posting',async(req,res)=>{

    const new_subject = new My_subjects({
          
        Firstsubject:req.body.Firstsubject,
        Secondsubject:req.body.Secondsubject,
        Thirdsubject:req.body.Thirdsubject,
        Forthsubject:req.body.Forthsubject,
    })

    try{
        const posted_subject =await new_subject.save()
        res.send(posted_subject)
    }catch(error){
        res.send(error)
    }
})


// get by id

router.get('/:getone',async(req,res)=>{
    try{
           const one_subject = await My_subjects.findById(req.params.getone)
           res.send(one_subject)
    }catch(err){
         console.log(err)
    }
})

// updating

router.patch('/:updateone',async(req,res)=>{

    try {
        const updated_subject =await My_subjects.findByIdAndUpdate({
            _id:req.params.updateone
        },req.body)
        res.send(updated_subject)
    } catch (error) {
        
    }

})

// deleting

router.delete('/:deleteone',async(req,res)=>{
    try {
        const deleted_subject =await My_subjects.findByIdAndDelete(req.params.deleteone)
        res.send(deleted_subject)
    } catch (error) {
        
    }
})










module.exports = router
