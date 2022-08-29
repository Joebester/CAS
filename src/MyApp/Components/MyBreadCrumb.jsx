import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom'

export default function MyBreadcrumb() {
    const his = useHistory()
    return (
        <>
            <MDBBreadcrumb style={{ padding: 10, paddingLeft: 15 }}>
                <MDBBreadcrumbItem>
                    <u className="bread" onClick={() => his.push("/app/dashboard")}>DashBoard</u>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active><u className='none'>{window?.location?.pathname?.substring(5)}</u></MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </>
    );
}