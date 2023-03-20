import React from "react";
import { useState } from "react";

export const List = () => {
    return (
        <form>
            <input
                type="text"
                placeholder="type something..."
            />
            <input
                type="submit"
                value="Add this!"
            />
        </form>
    );
}