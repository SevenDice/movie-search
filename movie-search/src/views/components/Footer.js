const Footer = {
  render: async () => {

    const view =  /* html */`
        <div class="footer-container">
          <a href="https://rs.school/" class="rss">RS School 2020Q1</a>
          <a href="https://github.com/SevenDice" class="github">SevenDice</a>
        </div>
      `
    return view
  },
  after_render: async () => {

  },
};

export default Footer;
