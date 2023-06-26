# Use the official Deno Docker image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Install Denon globally
RUN deno install -A -n denon https://deno.land/x/denon/denon.ts

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY deps.ts .
# Install the dependencies
RUN deno cache deps.ts

# Copy the application files
COPY . .

RUN deno cache main.ts

# Allow network access for the Deno application
EXPOSE 8080

# Run the Deno application using Denon
CMD ["denon", "run", "--allow-net", "main.ts"]

