import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table
  } from 'reactstrap';


function Cards(){
    // var ctx = canvas.getC;
    // var myDoughnutChart = new Chart(ctx, {
    //     type: 'doughnut',
    //     data: [12,19,3,5,2],
    //     options: {}
    // });
    return(
        <div>
        <div className="cd">
          <Card className="bg-dark ml-5">
            <CardBody>
              <CardTitle className="mb-2 text-muted">Total Downloads</CardTitle>
              <CardText className="text-white">9624</CardText>
            </CardBody>
          </Card>
          <Card className="bg-dark">
            <CardBody>
              <CardTitle className="mb-2 text-muted">Total Previews</CardTitle>
              <CardText className="text-white">8278</CardText>
            </CardBody>
          </Card>
          <Card className="bg-dark">
            <CardBody>
              <CardTitle className="mb-2 text-muted">Total Feedback</CardTitle>
              <CardText className="text-white">1798</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="cd">
        <Card className="bg-dark ml-5">
            <CardBody>
              <CardTitle className="mb-2 text-muted">Average Rating(Out of 10)</CardTitle>
              <CardText className="text-white">4</CardText>
            </CardBody>
          </Card>
          <Card className="bg-dark">
            <CardBody>
              <CardTitle className="mb-2 text-muted">Average Reaction</CardTitle>
              <CardText className="text-white">AVERAGE</CardText>
            </CardBody>
          </Card>
          <Card className="bg-dark">
            <CardBody>
              <CardTitle className="mb-2 text-muted">Chance of Playing</CardTitle>
              <CardText className="text-white">69%</CardText>
            </CardBody>
          </Card>
       </div>
       <div className="cd">
        <Card className="bg-dark ml-5 feed">
            <CardBody>
              {/* <CardTitle className="mb-2 text-muted">Average Rating(Out of 10)</CardTitle> */}
              <CardText className="text-white">FEEDBACKS</CardText>
              <hr/>
              <CardText className="text-white wd1">View all feedback including DJ names and text comments</CardText>
              {/* <CardText className="text-white wd1">Download all feedback including DJ names and text comments
              in a CSV file, to use in spreadsheet softwares like Microsoft Excel</CardText>
              <CardText className="text-white wd1">Download</CardText> */}
            </CardBody>
          </Card>
          </div>
          <div className="cd">
          <Card className="bg-dark ml-5 feed">
            <CardBody>
              <CardTitle className="text-white">FAVOURITE MIX</CardTitle>
              <Table className="text-white tw">
                <tr>
                  <th>No</th>
                  <th>MIX</th>
                  <th>Downloads</th>
                </tr>
                <hr/>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Original Mix</td>
                    <td>324</td>
                  </tr>
                </tbody>
                </Table>
              {/* <CardText className="text-white">69%</CardText> */}
              {/* {myDoughnutChart} */}
            </CardBody>
          </Card>
          </div>
       </div>
    );
}

export default Cards;