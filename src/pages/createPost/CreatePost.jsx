import React, { useState } from "react";
import { Upload, Form, Input, Button } from "antd";
import ImgCrop from "antd-img-crop";
import "./createpost.css";

const CreatePost = () => {
  const { TextArea } = Input;

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <section className="create-post">
      <div className="container center">
        <div className="create-post-form">
          <h2>Create New Post</h2>
          <div className="upload-image">
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </div>
          <Form>
            <Form.Item label="Title">
              <Input />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea rows={10} />
            </Form.Item>
            <Button className="publish" htmlType="button" type='primary'>
              Publish
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
