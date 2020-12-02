import React, { useEffect, useState } from 'react'
export const CustomImg = (props) => {
    const copyProps = JSON.parse(JSON.stringify(props));
    copyProps.src = (ValidInput.isEmpty(copyProps.src)) ? empty_avatar : copyProps.src
    return (
        <img {...copyProps} />
    )
}