import { useState } from "react";
import { Input } from '../../components';

const Filter = ({ displayName, name }) => {

    const [percentage, setPercentage] = useState(0);
    

    return (
        <div className='filter'>
            <Input
                displayName={displayName}
                name={name}
                type="checkbox"
            />
        </div>
    );
}

export default Filter;