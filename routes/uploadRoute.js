import express from "express";
import { Knex } from "../middlewere/Knex";
import fs from "fs-extra";
import moment from "moment";

const uploadRoute = express.Router();

uploadRoute.get("/", Knex, async (req, res) => {
  try {
    let url = process.env.IMAGE_URL;
    let result = await req.knex("files").orderBy("id", "desc");
    result = JSON.parse(JSON.stringify(result));

    for (let i of result) {
      i["image"] = `${url}${i["image"]}`;
    }

    return res.json({ status: "ok", data: result });
  } catch (error) {
    res.json({ status: "nok", message: "เกิดข้อผิดพลาด", data: error.message });
  }
}); //end get all

uploadRoute.get("/:ref_id", Knex, async (req, res) => {
  try {
    const { ref_id } = req.params;
    let url = process.env.IMAGE_URL;
    let result = await req
      .knex("files")
      .where({ ref_id: ref_id })
      .orderBy("id", "desc");
    result = JSON.parse(JSON.stringify(result));

    for (let i of result) {
      i["image"] = `${url}${i["image"]}`;
    }

    return res.json({ status: "ok", data: result });
  } catch (error) {
    res.json({ status: "nok", message: "เกิดข้อผิดพลาด", data: error.message });
  }
}); //end get by id

uploadRoute.post("/", Knex, async (req, res) => {
  try {
    const { ref_id } = req.fields;
    let dataImage = [];
    let filesNames = [];
    let url = process.env.IMAGE_URL;

    if (Object.keys(req.files).length == 0) {
      return res.json({
        status: "nok",
        message: "กรุณาเลือกไฟล์",
      });
    }

    //return res.json(req.files);
    for (let i in req.files) {
      let result = await uploadImage2(req.files[i]);
      filesNames.push(url + result);
      dataImage.push({
        ref_id: ref_id,
        image: result,
      });
    }
    await req.knex("files").insert(dataImage);

    return res.json({ status: "ok", data: filesNames });
  } catch (error) {
    res.json({ status: "nok", message: "เกิดข้อผิดพลาด", data: error.message });
  }
}); //end upload

uploadRoute.delete("/:id", Knex, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await req.knex("files").where({ id: id }).first();
    if (result) {
      const path = `uploads/images2/`;
      const image = `${path}${result["image"]}`;
      await req.knex("files").where({ id: id }).del();
      await fs.remove(image);
    }
    return res.json({ status: "ok", data: [], message: "Delete Successfully" });
  } catch (error) {
    res.json({ status: "nok", message: "เกิดข้อผิดพลาด", data: error.message });
  }
}); //end delete file

const uploadImage2 = async (file) => {
  const fomatDate = "YYYYMMDDHHmmss";
  const fileName =
    "xxx_" +
    moment().format(fomatDate) +
    Math.random().toString(36).substr(2, 5);
  var fileExtention = file.name.split(".")[1];

  if (file != null) {
    try {
      var fileExtention = file.name.split(".")[1];
      var newpath = "uploads/images2/" + fileName + "." + fileExtention;
      await fs.moveSync(file.path, newpath);
      return Promise.resolve(fileName + "." + fileExtention);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default uploadRoute;
