import { useDispatch } from "react-redux"; 

import { setFindQuery } from "redux/filters/findQuerySlice";

// style
import { FieldBox, FieldLabel, FieldPosition, FieldInput } from "../Forms.styled"


export const Search = ({value}) => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const query = e.currentTarget.value.trim().toLowerCase();
    return dispatch(setFindQuery(query))
  }

  return (
    <FieldBox>
      <FieldLabel>Find contacts by name
        <FieldPosition>
          <FieldInput
            type="text"
            value={value}
            onChange={handleSearchChange}
          />
        </FieldPosition>
      </FieldLabel>
    </FieldBox>
  )
}