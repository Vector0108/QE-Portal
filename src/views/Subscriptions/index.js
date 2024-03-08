import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { Card, CardHeader, CardBody, NavLink, Nav,NavItem,TabContent,TabPane} from 'reactstrap';
import DataTable from "react-data-table-component";

export default function Subscriptions () {

    const [activeTab, setActiveTab] = useState("active");

    const header = [
        {
            name:"Subscription Id",
            selector:"id",
            sortable:true,
        },
        {
            name:"Name",
            selector:"name",
            sortable:true,
        },
        {
            name:"Store",
            selector:"store",
        },
        {
            name:"Email Id",
            selector:"email",
        },
        {
            name:"Capital for Inventory",
            selector:"capital",
            sortable:true,
        },
        {
            name:"Action",
            selector:"action",
        },
    ];

    const body = [
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        },
        {
            "id": "1001",
            "name": "Dylan Haselton",
            "store": "Warehouse Sales Amazon",
            "email": "bhughes5775@gmail.com",
            "capital": "$5000",
            "action": (<div></div>)
        }
    ]

    useEffect(() => {

    }, [])

    return(
        <div>
            <div className="row iq-card" style={{justifyContent: 'space-between', padding: 15}}>
                <span style={{fontSize: 22, color: 'black', fontWeight: 500}}>Subscriptions</span>
                <Link to="/subscriptions/add" className="btn btn-primary mt">
                    <span style={{fontSize: 18}}>Add Subscriptions</span>
                </Link>
            </div>
            <div className="row iq-card" style={{padding: 40}}>
                <div style={{width: '100%'}}>
                    <Nav className="nav nav-tabs" id="myTab-1" role="tablist">
                        <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "active" ? " active" : "")}
                                onClick={() => { setActiveTab('active'); }}
                            >
                                Active
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink
                                className={(activeTab === "blocked" ? " active" : "")}
                                onClick={() => { setActiveTab('blocked'); }}
                            >
                                Blocked
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className="tab-content">
                        <TabPane tabId="active">
                            <DataTable
                                columns={header}
                                data={body}
                                fixedHeader

                            />
                        </TabPane>
                        <TabPane tabId="blocked">
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    )
}
