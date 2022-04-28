import React from 'react'
import "./pricingpage.css"

const PricingPage = () => {
    return (
        
            <body>

<h1>Pricing Table</h1>
<p>Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
  <table>

      <colgroup></colgroup>
      <colgroup></colgroup>
      <colgroup></colgroup>
      <colgroup></colgroup>

      <thead>
          <tr>
              <th>
                 <h2> Features</h2>
              </th>
              <th>
                  <h2>Single User</h2>
                  <p>Free to Try</p>
              </th>
              <th>
                  <h2>Premium</h2>
                  <p>$ 499/Month</p>
                  <p class="promo">Our most valuable package!</p>
              </th>
              <th>
                  <h2>Standard</h2>
                  <p>$ 299/Month</p>
              </th>
          </tr>
      </thead>

      <tfoot>
          <tr>
              <th>&nbsp;</th>
              <td><a href="#">Start a free trial</a></td>
              <td><a href="#">Start a free trial</a></td>
              <td><a href="#">Start a free trial</a></td>
          </tr>
      </tfoot>

      <tbody>
          <tr>
          {/* <th>Unlimited Applications <span>Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</span></th> */}

              <th>Unlimited Applications </th>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
          </tr>
          <tr>
              <th>Enhanced Team Work Environment </th>
              <td>X</td>
              <td>✓</td>
              <td>✓</td>
          </tr>
          <tr>
              <th>Multi Langugae Support </th>
              <td>X</td>
              <td>✓</td>
              <td>✓</td>
          </tr>
          <tr>
              <th>Unlimited Team Members </th>
              <td>Single User</td>
              <td>✓</td>
              <td>Upto 3 Team Members</td>
          </tr>
          <tr>
              <th>Third Party Integration </th>
              <td>x</td>
              <td>✓</td>
              <td>✓</td>
          </tr>
          <tr>
              <th>Cloud Deploy </th>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
          </tr>
          <tr>
              <th>Online Support </th>
              <td>X</td>
              <td>✓</td>
              <td>X</td>
          </tr>
      </tbody>

  </table>

</body>
    
    )
}

export default PricingPage
