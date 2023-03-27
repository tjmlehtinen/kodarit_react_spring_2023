import React from "react";
import { useState } from "react";

export const List = () => {
    const [content, setContent] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [itemId, setItemId] = useState(0);

    return (
        <div>
            <form
                onSubmit={
                    (event) => {
                        event.preventDefault()
                        const newItem = {data: inputValue, id: itemId}
                        setInputValue("")
                        setItemId(itemId + 1)
                        const newContent = [newItem, ...content]
                        setContent(newContent)
                    }
                }
            >
                <input
                    type="text"
                    placeholder="type something..."
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    required
                />
                <input
                    type="submit"
                    value="Add this!"
                />
            </form>
            <ul>
                {
                    content.map((item) =>
                        <li key={item.id}>
                            {item.data}
                            <button
                                type="button"
                            >
                                Remove
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}