import styled from "styled-components";

function PreviousWork() {
    return ( 
        <div>
            <h1>Previous Work</h1>
            <ImagePlaceholder/>
            <p>WW Farms Ecommerce Site</p>
        </div>
     );
}

export default PreviousWork;

export const ImagePlaceholder = styled.div`
    height: 200px;
    width: 300px;
    background-color: red;
`;