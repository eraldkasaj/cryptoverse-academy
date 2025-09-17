import '../components/Categories.css'


const Categories = () => {
    return (
         <section className="categories">
      <div className="container">
        <div className="row justify-content-center text-center g-5">
          <div className="col-md-2 col-6 ">
            <div className="card p-2 shadow-sm">
                <i class="bi bi-shield-lock-fill fs-3"></i>
              <h5>Crypto Security</h5>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="card p-2 shadow-sm ">
                <i class="bi bi-journal-code fs-3"></i>
              <h5>Courses</h5>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="card p-2 shadow-sm ">
                <i class="bi bi-cash-coin fs-3"></i>
              <h5>Learn & Earn</h5>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="card p-2 shadow-sm ">
                <i class="bi bi-tv fs-3"></i>
              <h5>Product Guides</h5>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="card p-2 shadow-sm ">
                <i class="bi bi-currency-bitcoin fs-3"></i>
              <h5>Learn BTC</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    )

}

export default Categories