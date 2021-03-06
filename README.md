# Photoshelter Test

## Setup

1. Clone repo 
2. Open __email-report.js__ in the root directory and change `to: 'karoliskrulis@gmail.com',` to the email where you would like to receive __report.json__
3. Run 	`npm install-test`
4. Node will send a report as an email attachment and open an interactive report in your default browser. 


* test occasionally hands on "singup". ctrl+c and restart test


## Challenge: 

Use [CodeceptJS](http://codecept.io/) to accomplish a series of steps on [Photoshelter's site](https://www.photoshelter.com/). 

## Tests

### Navigation

1. Visit [photoshelter.com](https://www.photoshelter.com/)
2. Test for existence of *Yellow Sign Up Now* button
3. Test for existence of:

    * *Features* top navigation link
    * *Templates* top navigation link
    * *Images* top navigation Learn link
    * *Pricing* top navigation link
    * *More* top navigation link
    * *Login* top navigation link


### Sign Up

4. Click Sign Up Now 

    * Enter First Name
    * Enter Last Name
    * Enter Email Address
    * Enter Password
    * Submit Form

5. Accept default site URL

    * Select an option for “I came to Photoshelter to:”
    * Submit Form


6. Check for existence of *Red “Get Started Now”* button
7. Click “Get Started Now”


### Upload

1. Visit [Photoshelter's member area](http://www.photoshelter.com/mem/home/)
2. Click “Upload”
3. Click "to new Gallery”
4. Name your gallery & give it a dynamic name based on today’s date
5. Submit form
6. Upload a single image

