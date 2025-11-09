:root { --bg1:#4e73df; --bg2:#1cc88a; }
*{box-sizing:border-box}
body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: linear-gradient(120deg, var(--bg1), var(--bg2));
  color: #fff; text-align: center; margin: 0; padding: 48px 16px;
}
h1{ margin-top: 0; }
button{
  background: #fff; color: #334; border: 0; border-radius: 10px;
  padding: 10px 18px; margin: 6px; font-size: 16px; cursor: pointer; transition: .2s;
}
button:hover{ filter: brightness(.95); transform: translateY(-1px); }
#counter,#time{
  margin: 24px auto; background: rgba(255,255,255,.15);
  border-radius: 14px; padding: 20px 24px; max-width: 520px;
  backdrop-filter: blur(2px);
}

