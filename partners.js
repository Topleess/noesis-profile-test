const referralLink = document.querySelector("[data-referral-link]");
const copyReferral = document.querySelector("[data-copy-referral]");

copyReferral?.addEventListener("click", async () => {
  await navigator.clipboard.writeText(referralLink.value);
  copyReferral.innerHTML = '<i data-lucide="check" aria-hidden="true"></i> Ссылка скопирована';
  if (window.lucide) window.lucide.createIcons();
  window.setTimeout(() => {
    copyReferral.innerHTML = '<i data-lucide="copy" aria-hidden="true"></i> Скопировать ссылку';
    if (window.lucide) window.lucide.createIcons();
  }, 1600);
});

if (window.lucide) {
  window.lucide.createIcons();
}
