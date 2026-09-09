// Safe mock: disabled external network exfiltration in clone environment.
window.sendTelegramMessageNoBtn = async function sendTelegramMessageNoBtn() {
  return { ok: true, mocked: true };
};