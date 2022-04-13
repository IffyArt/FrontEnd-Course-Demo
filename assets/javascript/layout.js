const navbarLink = document.querySelector('.navbar');
const links = [
  { href: 'demo1.html', name: 'demo1' },
  { href: 'demo2.html', name: 'demo2' },
  { href: 'demo3.html', name: 'demo3' },
];
const navbarLinks = `<li><a href="demo1.html">demo1</a></li>
<li><a href="demo2.html">demo2</a></li>
<li><a href="demo3.html">demo3</a></li>`;

navbarLink.innerHTML = `
<a class="navbar__logo" href="https://google.com.tw"> Logo</a>
<ul class="navbar__link">
	${navbarLinks}
</ul>
<ul class="navbar__button">
	<li><a href="#">Link</a></li>
	<li><a href="#">Link LOGO</a></li>
</ul>`;
