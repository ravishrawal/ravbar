import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Box } from "@mui/system";
import "./component.css";
import "./icons/icon.css";


class Ravbar extends StreamlitComponentBase {

    public render = (): ReactNode => {
        const items = this.props.args['paths']
        const icons = this.props.args['icons']
        this.state = {
            icon: icons[0],
            label: items[0]
        }

        return (

            <div className="d-flex flex-column bd-highlight" style={{ width: "100%", height: "100%", backgroundColor: "#111", paddingTop: "-100px" }}>
                {items.map((text, index) => (

                    <span className={`tab-container p-4 flex-fill bd-highlight`} style={{ listStyleType: "none" }}>
                        <li className="tab"
                            key={index}
                            onClick={() => this.setState(
                                prevState => ({ icon: icons[index], label: text }),
                                () => Streamlit.setComponentValue(text)
                            )}>
                            {/* flexbox for even spacing */}
                            <span className="material-icons md-dark">{icons[index]}</span>
                        </li>
                    </span>

                ))}
            </div>
        )
    }


}

// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(Ravbar)
