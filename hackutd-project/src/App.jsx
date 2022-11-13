import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button  from '@mui/material/Button';
// import useStyles from './styles';free

function CategorySelect () {
    const budgetCategories = [
        { label: 'Rent'},
        { label: 'Food'},
      ];
    const [textValue, setTextValue] = useState("");
    const [categoriesArray, setCateArray] = useState("")
    const onTextChange = (e) => {
        setTextValue(e.target.value);   
    }
    const handleSubmit = (e) => {
        setCateArray(categoriesArray => [...categoriesArray, textValue])

        };
    const handleEnter = () => {
        console.log(textValue);
        setCateArray(categoriesArray => [...categoriesArray, textValue])
        console.log(categoriesArray)
    }

    return (
    <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
            multiple
            id="tags-filled"
            options={budgetCategories.map((option) => option.label)}
            // defaultValue={[budgetCategories[0].label, budgetCategories[1].label]}
            freeSolo
            renderTags={(value, getTagProps) => 
            value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
            }
            renderInput={(params) => (
            <><TextField
                    {...params}
                    variant="filled"
                    label="Categories"
                    placeholder="Enter budget categories"
                    onChange={onTextChange}
                    value={textValue} 
                    onKeyDown={(ev) => {
                        if (ev.key === "Enter"){
                            handleEnter()
                        }
                    }}
                    />
                    <Button onClick={handleSubmit}>Submit</Button></>
            )}
        />
        </Stack>
    );
}

export default function App() {
    return <CategorySelect />;
}
