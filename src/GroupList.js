import { Spinner } from "./Spinner";
import { capitalize } from "./stringUtil";
import Button from "react-bootstrap/Button";

export const GroupList = ({groups, onGroupChange, groupSubmit, groupsLoading}) => {


    if (groupsLoading) {
        return (
            <Spinner />
        )
    }

    const groupComps = groups.map(group => <div key={group}>
        <input type="radio" name="group" key={group} value={group} onChange={onGroupChange}/>
        <label htmlFor={group}>{capitalize(group)}</label>
        </div>);
    
    if (groups.length > 0) {

    return (
        <form name="groupForm">
        <fieldset>
            <legend>Which group would you consider yourself to be in?</legend>
            {groupComps}
            <Button onClick={groupSubmit}>Save Group</Button>
        </fieldset>
        </form>
    );
    } else {
        return (<></>);
    }
}