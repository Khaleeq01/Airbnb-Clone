import express from "express"
import { cancelBooking, createBooking } from "../controllers/booking.controller.js";
import isAuth from "../middleware/isAuth.js";

let bookingRouter= express.Router()

bookingRouter.post("/create/:id",isAuth,createBooking)
bookingRouter.delete("/cancel/:id",isAuth,cancelBooking)


export default bookingRouter;