// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
// response data in the page. You may render UI with any style.
const loadingElement = document.getElementById('loading');

async function ajax(url) {
    // your code here
    try {
        const response = await fetch(url); //use fetch to get data
        if (!response.ok) throw ('Failed to retrieve data. Please try again.'); //if remote get error, throw an error
        const data = await response.json();
        return data //pass the data to next stage
    } catch (e) {
        throw new Error(e); //throw an error
    } finally {
        loadingElement.classList.add('hidden'); //hide the loading skeleton
    }
}
function render(data) {
    // your code here
    const porductsList = document.getElementById('porducts');
    const porductTemplate = document.getElementById('porductTemplate'); //get the product card template
    // <template>: The Content Template element
    // @ https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
    data.forEach((item) => {
        const template = document.importNode(porductTemplate.content, true); //copy the template node and copy all the descendants
        template.querySelector('#name').textContent = item.name;
        template.querySelector('#description').textContent = item.description;
        template.querySelector('#price').textContent = item.price.toLocaleString('zh-TW',
            {
                style: 'currency',
                currency: 'TWD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }); //use `toLocaleString()` to convert the price to currency display
        porductsList.appendChild(template);
    })
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
    render(data);
});

// you should get product information in JSON format and render data in the page