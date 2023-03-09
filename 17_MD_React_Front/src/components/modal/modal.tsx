import React from "react";

interface Props {
  updateData: {
    title: string;
    content: string;
    image: string;
  };
  setUpdateData: (updateData: { title: string; content: string; image: string }) => void;
  handleEditSubmit: () => void;
}

const Modal: React.FC<Props> = ({ updateData, setUpdateData, handleEditSubmit }) => {
    return (
        <>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Blog</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="mb-2 col-6 text-start">
                                        <label htmlFor="inputName" className="form-label">
                                            Blog Title
                                        </label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            value={updateData.title}
                                            onChange={e=> setUpdateData({ ...updateData, title: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group mb-2 text-start">
                                        <label htmlFor="inputFile">
                                            Blog content
                                        </label>
                                        <textarea 
                                            className="form-control modal__textarea"
                                            rows={4}
                                            id="inputFile"
                                            value={updateData.content}
                                            onChange={e=> setUpdateData({ ...updateData, content: e.target.value})}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group mb-2 text-start">
                                        <label htmlFor="inputInfo">
                                            Blog image
                                        </label>
                                        <input 
                                            className="form-control" 
                                            id="inputInfo" 
                                            value={updateData.image}
                                            onChange={e=> setUpdateData({ ...updateData, image: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleEditSubmit()}>Update blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};   
export default Modal;