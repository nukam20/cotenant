

function next(form) {

    form_space = document.getElementById('morphingform');
    form_space.innerHTML = forms[form];
}

function back(form) {
    form_space = document.getElementById('morphingform');
    form_space.innerHTML = forms[form];
}

function slider() {

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value + "K";

    slider.oninput = function () {
        output.innerHTML = this.value + " K";
    }

}

login_form = `<form>
          
            <div class="form-heading">LOG IN</div>
              <div class="form-group">
                  <label for="InputEmail" class="email-label">Email address</label>
                
                  <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" required>
                  <small id="emailValId" class="form-text text-muted text-danger"></small>
              </div>
              <div class="form-group">
                  <label for="InputPassword">Password</label>
                  <input type="passwordValId" class="form-control" id=InputPassword" placeholder="Password">
              </div>
          
              <button type="submit" class="btn btn-primary btn-green">LOG IN</button>
              <div class="forgot-password">Forgot password?</div>
              <div  class="no-account"> Don't have an account yet?<a id="btnx" onclick="next(1)" class="sign-up">sign-up</a></div>
            </form>`

email_form = `<form>
                    <i onclick="back(0)"  class="fas fa-arrow-left"></i>
                    <div class="">
                        <p class="form-heading">Please fill in your email Address.</p>
                        <p class="">A confirmation will be sent to you</p>
                    </div>
                    <div class="form-group">
                        <label for="InputEmail">Email address</label>
                        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" required>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                <a onclick="next(2)"  class="btn btn-primary btn-green">SEND MY CODE</a>

            </form>`;

confirmation_form = `
                    <form>  
                         <i onclick="back(1)"  class="fas fa-arrow-left"></i>
                            <div class="">
                                <p class="form-heading">Email confirmation</p>
                                <p>Your code has been sent to your email.Please cheeck your email and send the 
                                    4-digit code sent to you</p>
                            </div>
                            <div class="enter-codes">
                                <input type="password" name="pin" maxlength="1">
                                <input type="password" name="pin" maxlength="1">
                                <input type="password" name="pin" maxlength="1">
                                <input type="password" name="pin" maxlength="1">
                                </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" >
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                        <button onclick="next(3)"  class="btn btn-primary btn-green">SEND MY CODE</button>

                    </form>`;

confirmated_form = `
                    <form>
                         <i onclick="back(2)"  class="fas fa-arrow-left"></i>
                           
                            <div class="form-group">
                                <p class="form-heading">Email Confirmed<p>
                                <div class="mark-wrapper"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0C10.7458 0 0 10.7453 0 24C0 37.2547 10.7458 48 24 48C37.2557 48 48 37.2547 48 24C48 10.7453 37.2552 0 24 0ZM19.5974 36.3283L9.02971 25.7611L12.552 22.2388L19.5974 29.2838L35.448 13.4327L38.9703 16.955L19.5974 36.3283Z" fill="#6AC259"/>
                                </svg>
                                </div>
                                <div>You can continue with the process</div>
                            </div>

                        <button onclick="next(4)"  class="btn btn-primary btn-green">CONTINUE PROCESS</button>

                    </form>
                    `
aboutyou_form = `
                    <form>
                        <i onclick="back(3)"  class="fas fa-arrow-left"></i>
                        <div class="form-heading">Tell us about you</div>
                        <div class="form-group">
                            <label for="InputFirstName">First Name</label>                       
                            <input type="name" class="form-control" id="InputFirstName" aria-describedby="emailHelp" placeholder="Enter First Name" required>
                            <small id="InputFirstNameValId" class="form-text text-muted text-danger font-weight-bold"></small>
                        </div>
                        <div class="form-group">
                            <label for="InputLastName">Last Name</label>
                            <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Enter Last Name" required>
                            <small id="InputLastNameValId" class="form-text text-muted text-danger font-weight-bold"></small>
                        </div>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Gender</label>
                            <select  class="form-control">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                
                            </select>
            
                         </div>
                        <button onclick="next(5)" class="btn btn-primary btn-green">NEXT</button>
                    </form>`
morequestions_form =
    `<form>
                    <i onclick="back(4)"  class="fas fa-arrow-left"></i>
                        <div class="">
                            <p class="form-heading">Thank you for letting us know</p>
                            <p>We have a few more questions to ask about your preferences</p>
                        </div>
                        

                    <button onclick="next(6)"  class="btn btn-primary btn-green">CONTINUE ASKING</button>

                    </form>`;

gender_preference =
    `<form>
                            <i onclick="back(5)"  class="fas fa-arrow-left"></i>
                            <div class="">
                                <p class="form-heading">Gender Preference</p>
                                <p>What gender are you most comfortable with?</p>

                            </div>
                            <div class="form-group">
                                <input type="radio"  id="male" value="male" name="gender">
                                <label for="male">Male</label>
                            </div>
                            <div class="form-group">
                                <input type="radio"  id="female" value="female" name="gender">
                                <label for="female">Female</label>
                            </div>
                            <div class="form-group">
                            <input type="radio" id="both" value="both" name="gender">
                            <label for="both">Both</label>
                        </div>

                        <button onclick="next(7)"  class="btn btn-primary btn-green">NEXT</button>

                        </form>`;

religious_preference = `<form>
                          
                            <i onclick="back(6)"  class="fas fa-arrow-left"></i>
                                <div class="">
                                    <p class="form-heading">Religious Preference</p>
                                    <p>Are you a</p>

                                </div>
                                <div class="form-group">
                                    <input type="radio"  id="christian" value="christian" name="religion">
                                    <label for="christian">Christian</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio"  id="muslim" value="muslim"" name="gender">
                                    <label for="muslim"">Muslim"</label>
                                </div>
                                <p>Can you stay with a</p>
                                <div class="form-group">
                                    <input type="radio"  id="christian" value="christian" name="religion">
                                    <label for="christian">Christian</label>
                                 </div>
                                <div class="form-group">
                                    <input type="radio"  id="muslim" value="muslim" name="gender">
                                    <label for="muslim">Muslim"</label>
                                </div>
                                <div class="form-group">
                                <input type="radio"  id="any" value="any" name="gender">
                                <label for="any">Any"</label>
                            </div>
                            <button onclick="next(8)"  class="btn btn-primary btn-green">NEXT</button>

                            </form>`;
personal_preference = `<form>
                        <i onclick="back(7)"  class="fas fa-arrow-left"></i>
                            <div class="">
                                <p class="form-heading">Personal Preference</p>
                                <p>Do you smoke?</p>

                            </div>
                            <div class="form-group">
                                <input type="radio"  id="yes" value="yes" name="smoke">
                                <label for="smoke">Yes</label>
                            </div>
                            <div class="form-group">
                                <input type="radio"  id="no" value="no" name="gender">
                                <label for="smoke">No</label>
                            </div>
                            <div> Can you stay with someone who smokes</div>
                            <div class="form-group">
                            <input type="radio"  id="yes" value="yes" name="smoke">
                            <label for="smoke">Yes</label>
                            </div>
                            <div class="form-group">
                                <input type="radio"  id="no" value="no" name="gender">
                                <label for="smoke">No</label>
                            </div>
                        <button onclick="next(9)"  class="btn btn-primary btn-green">NEXT</button>

                    </form>`;
disability_preference = `<form> 

                           <i onclick="back(8)"  class="fas fa-arrow-left"></i>
                            <div class="">
                                <p class="form-heading">Disability Preference</p>
                                <p>Are you a disabled person?</p>

                            </div>
                            <div class="form-group">
                                <input type="radio"  id="yes" value="yes" name="disable">
                                <label for="disable">Yes</label>
                            </div>
                            <div class="form-group">
                                <input type="radio"  id="no" value="no" name="disable">
                                <label for="disable">No</label>
                            </div>
                            <div> Can you stay with a disabled person</div>
                            <div class="form-group">
                            <input type="radio"  id="yes" value="yes" name="disable">
                            <label for="disable">Yes</label>
                            </div>
                            <div class="form-group">
                                <input type="radio"  id="no" value="no" name="disable">
                                <label for="disable">No</label>
                            </div>
                            <button onclick="next(10)" class="btn btn-primary btn-green">NEXT</button>

                        </form>`;
greatjob_form = `<form>
                    <i onclick="back(9)"  class="fas fa-arrow-left"></i>
                            <div class="form-heading">Great Job,You are 60% done</div>
                            <p>Only a few more questions to help us know you better</p>

                        <button onclick="next(11)"  class="btn btn-primary btn-green">LET'S FINISH THIS</button>

                </form>`;


location_form = `<form>
                    <i onclick="back(10)"  class="fas fa-arrow-left"></i>
                    <div class="">
                        <p class="form-heading">Location Preference</p>
                        <p>Where will you like to live?</p>
                        <p>Please fill in only 2 locations</p>
                    </div>
                    <div class="form-group">
                        
                    <select name="Country" multiple size="5" class="multi-select">
                    <option value="Yaba">Yaba</option>
                    <option value="Surulele">Surulele</option>
                    <option value="Ikeja">Ikeja</option>
                    <option value="Lekki">Lekki</option>
                    </select>
                    </div>
                
                    <button onclick="next(12)"  class="btn btn-primary btn-green">NEXT</button>

                </form>`;

job_details = `
                 <form>
                    <i onclick="back(11)"  class="fas fa-arrow-left"></i>
                        <div class="form-heading">Job Details</div>
                        <p>We ensure you all informations provided are strictly confidential</p>
                        <div class="form-group">
                            <label for="InputWork">Where do you work?</label>
                            
                            <input type="email" class="form-control" id="InputWork">
                        </div>
                      
                        <div class="form-group">
                        <label for="InputSalaryRange">What is your salary range?</label>
                            <select  class="form-control">
                                <option value="70k">70 - 100k</option>
                                <option value="100k">100 - 150k</option>
                                <option value="150k">150 - 200k</option>
                                <option value="200k">200 - 300k</option>
                                <option value="300k">300 - 400k</option>
                                <option value="400k">400 - 500k</option>
                                <option value="500k">500 - above</option>
                                
                            </select>

                        </div>
                    <button onclick="next(13)"  class="btn btn-primary btn-green">NEXT</button>
                    </form>`

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

Additional_information = `
                            <form>
                            <i onclick="back(12)"  class="fas fa-arrow-left"></i>
                                <div class="form-heading">Additional Details</div>
                                <p>How much can you pay monthly?</p>
                               
                                <div class="""slidecontainer" oninput="slider()">
                                    <input type="range" min="30000" max="1000000" value="60000" class="slider" id="myRange">
                                    <p>AM0UNT:N<span id="demo"></span></p>
                                    </div>

                                <div class="form-group">
                                    <label for="InputWork">Where do you work?</label>
                                    
                                    <input type="email" class="form-control" id="InputWork">
                                </div>
                                <div class="font-16">
                                    How do you intend to live in the apartment?
                                </div>
                                <div class="form-group">
                                <label for="InputSalaryRange">Don't worry you will be billed monthly</label>
                                <div class="form-group">
                                    <input type="radio"  id="oneYear" value="oneYear" name="year">
                                    <label for="oneYear">1 year</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio"  id="twoYear" value="twoYear" name="year">
                                    <label for="twoYear">2 year</label>
                                </div>
                                <div class="form-group">
                                    <input type="radio"  id="christian" value="threeYear" name="year">
                                    <label for="threeYear">3 year</label>
                                </div>

                                </div>
                                <button onclick="next(14)"  class="btn btn-primary btn-green">NEXT</button>
                            </form>`
security = `
                    <form>
                        <i onclick="back(13)"  class="fas fa-arrow-left"></i>
                            <div class="form-heading">Let's set up your security</div>
                            <p>We ensure you all informations provided are strictly confidential</p>
                            
                            <div class="form-group">
                                <label for="InputSalaryRange">Password</label>
                                <input type="password" class="form-control" id="InputSalaryRange">
                            </div>
                            <div class="form-group">
                            <label for="InputSalaryRange">Confirm Password</label>
                            <input type="password" class="form-control" id="InputSalaryRange">
                    </div>
                    
                        <button onclick="next(15)"  class="btn btn-primary btn-green">DONE</button>
                    </form>`
holdon = `
                <form>
                    <i onclick="back(14)"  class="fas fa-arrow-left"></i>
                        <div class="form-heading">Please hold on,We are preparing your dashborad</div>
                       
                            <div class="loader"></div>

                </form>`
passwordReset = `
                    <form>
                            <i onclick="back(13)"  class="fas fa-arrow-left"></i>
                                <div class="form-heading">Please Enter your email,You will be sent a reset link</div>
                             
                                
                                <div class="form-group">
                                    <label for="InputEmail">Email address</label>
                                    <input type="email" class="form-control" id="InputEmail" placeholder="Enter Email">
                             

                            <button onclick="next(16)"  class="btn btn-primary btn-green">RESET PASSWORD</button>
                    </form>`
    
forms = [login_form, email_form, confirmation_form, confirmated_form, aboutyou_form, morequestions_form, gender_preference,
    religious_preference, personal_preference, disability_preference, greatjob_form, location_form, job_details, Additional_information, security, holdon,
    passwordReset
];

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
