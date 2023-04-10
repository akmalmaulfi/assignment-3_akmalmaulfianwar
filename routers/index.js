const router = require("express").Router()
const {
  getAllPhotos,
  getOnePhotoById,
  createPhoto,
  updateOnePhotoById,
  deleteOnePhotoById,
} = require("../controllers/photoController")

router.get("/photos", getAllPhotos)
router.get("/photos/:id", getOnePhotoById)
router.post("/photos", createPhoto)
router.put("/photos/:id", updateOnePhotoById)
router.delete("/photos/:id", deleteOnePhotoById)

module.exports = router
