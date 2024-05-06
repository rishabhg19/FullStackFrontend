import React, { useState } from 'react';

const Note = (props) => {

    // const [editMode, setEditMode] = useState(false);
    // const [updatedTitle, setUpdatedTitle] = useState(props.title);
    // const [updatedContent, setUpdatedContent] = useState(props.content);

    // const handleUpdate = () => {
    //     props.updatedNote(props.id, updatedTitle, updatedContent);
    //     setEditMode(false);
    // }
    return (

                <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={props.delete}>DELETE</button>
            </div>
    );
}

export default Note;