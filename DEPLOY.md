Deployment steps for GitHub Pages

This project uses a GitHub Actions workflow at `.github/workflows/pages.yml` to build and deploy the site.

What I changed for you
- The workflow was updated to publish the actual static site from `dist/client` instead of `dist`.
- The workflow now copies `dist/client/brain-tds.html` to `dist/client/index.html` so GitHub Pages can serve the site correctly.
- The workflow still requires a repository secret named `PERSONAL_TOKEN` so `actions/configure-pages` can enable Pages if needed.

What you still need to do (one of these)

Option A — Recommended: Create a Personal Access Token (PAT) and add it as a secret
1. Create a PAT (classic) on GitHub with `repo` scope:
   - GitHub → Settings → Developer settings → Personal access tokens → Generate new token → select `repo` scope.
2. Add the PAT as a repository secret named `PERSONAL_TOKEN`:
   - Repository → Settings → Secrets and variables → Actions → New repository secret
   - Name: `PERSONAL_TOKEN`
   - Value: paste the PAT
3. Re-run the Pages workflow in Actions (or push an empty commit):
   - From the repository page → Actions → open the failing workflow → Re-run jobs

Option B — Manually enable Pages in repository settings
1. Repository → Settings → Pages.
2. Configure the source to use `GitHub Actions` or otherwise enable Pages for the repository.
3. Re-run the workflow in Actions.

Optional: using GitHub CLI (if you have `gh` locally):
```bash
# Set a secret (you still need the PAT value locally):
gh secret set PERSONAL_TOKEN -b"<your-pat-here>"

# Re-run the workflow by name (example):
gh workflow run "Deploy to GitHub Pages" --ref main
```

Troubleshooting
- If the workflow still fails with `Not Found`, ensure the secret exists and is correct, and that the PAT has the `repo` scope.
- Make sure the workflow's artifact path (`dist`) matches your build output directory. If your build outputs to a different folder, update `.github/workflows/pages.yml` accordingly.

If you want, I can:
- Draft the PAT for you if you supply credentials (not recommended). Instead, I can guide you step-by-step while you create and paste the PAT value into the Secrets UI.
- Add a small workflow to deploy to Cloudflare Pages or another host if you prefer a different host.

Once you add the secret or enable Pages manually, re-run the workflow and paste the run URL here — I'll inspect its logs and fix any remaining issues.
