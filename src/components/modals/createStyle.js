import React from 'react';

const CreateStyle = ({newStyle, onChange}) => {

    return (
        <div>
            <h2 className="title">Add New Map Style</h2>
            <table>
            <tr>
                <td><label>NAME</label></td>
                <td>
                    <input type="text"
                        name="name"
                        className="inputBox sml"
                        value={newStyle.name}
                        onChange={onChange} />
                </td>
            </tr>
            <tr>
                <td><label>URL</label></td>
                <td><input type="text"
                    className="inputBox sml"
                    name="url"
                    value={newStyle.url}
                    onChange={onChange} />
                </td>
            </tr>
            <tr>
                <td><label>AUTHOR</label></td>
                <td>
                    <input type="text"
                    className="inputBox sml"
                    name="author"
                    value={newStyle.author}
                    onChange={onChange} />
                </td>
            </tr>
            <tr>
                <td><label>IMAGE LINK</label></td>
                <td>
                    <input type="text"
                    className="inputBox sml"
                    name="image"
                    value={newStyle.image}
                    onChange={onChange} />
                </td>
            </tr>
            <tr>
                <td><label>GITHUB LINK</label></td>
                <td>
                    <input type="text"
                        className="inputBox sml"
                        name="github"
                        value={newStyle.github}
                        onChange={onChange} />
                </td>
            </tr>

            </table>
        </div>
    );
};

export default CreateStyle;
