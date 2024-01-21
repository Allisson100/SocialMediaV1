import { useState } from "react";
import AskDeletePost from "../AskDeletePost"
import { DeleteContainer , IconContainer } from "./styles"
import { FaTrash } from "react-icons/fa6";

const DeletePost = ({ id }) => {

    const [ deletePost , setDeletePost ] = useState(false)

    const handleTrashIcon = () => {
        setDeletePost(true)
    }

    const handleDeletePost = () => {
        setDeletePost(false)
    }

    return (
        <DeleteContainer>
            {deletePost &&
                <AskDeletePost id={id} handleDeletePost={handleDeletePost}/>
            }
            {!deletePost &&
                <IconContainer
                    onClick={handleTrashIcon}
                >
                    <FaTrash color='white' />
                </IconContainer>
            }
        </DeleteContainer>
    )
}

export default DeletePost